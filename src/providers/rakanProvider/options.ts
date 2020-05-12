/* eslint-disable @typescript-eslint/ban-ts-ignore */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/camelcase */
/*
 * Copyright 2015 Red Hat Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
"use strict";
import util from "util";
import minimist from "minimist";

function describe(optdef: {
    name: string;
    alias: string;
    describe: string;
    default: string;
}) {
    let desc = "    --" + optdef.name;
    if (optdef.alias) desc += " (-" + optdef.alias + ")";
    if (optdef.describe) desc += " " + optdef.describe;
    if (optdef.default) desc += " (default=" + optdef.default + ")";
    return desc;
}

function print(s: any) {
    console.log(s);
}

function usage(options: any[], usage: any) {
    console.log(usage || "options:");
    options.map(describe).forEach(print);
}

function as_array(options: { [x: string]: any }) {
    const out = [];
    for (const o in options) {
        const definition = options[o];
        if (definition.alias) {
            if (definition.alias.length > o.length) {
                definition.name = definition.alias;
                definition.alias = o;
            } else {
                definition.name = o;
            }
        } else {
            definition.name = o;
        }
        out.push(definition);
    }
    return out;
}

// @ts-ignore
function get_type(o: any[]) {
    if (typeof o == "number" || o instanceof Number) {
        return "number";
    } else if (util.isArray(o)) {
        return get_type(o[0]);
    } else {
        return "string";
    }
}

function Options(this: any, options: any[]) {
    this.options = options;
    const minimist_opts = {
        string: [],
        number: [],
        boolean: [],
        alias: {},
        default: {},
    };
    this.options.forEach(function (definition: {
        alias: any;
        name: string | number;
        default: undefined;
        type: string;
    }) {
        if (definition.alias) {
            // @ts-ignore
            minimist_opts.alias[definition.name] = definition.alias;
        }
        if (definition.default !== undefined) {
            // @ts-ignore
            minimist_opts.default[definition.name] = definition.default;
        }
        if (definition.type === "boolean") {
            // @ts-ignore
            minimist_opts.boolean.push(definition.name);
        } else if (definition.default !== undefined) {
            // @ts-ignore
            minimist_opts[get_type(definition.default)].push(definition.name);
        }
    });
    this.argv = minimist(process.argv.slice(2), minimist_opts);
}

Options.prototype.help = function (name: string) {
    const field = name || "help";
    if (this.argv[name]) {
        usage(this.options, this.usage_text);
        process.exit(0);
    }
    return this;
};

Options.prototype.usage = function (usage: any) {
    this.usage_text = usage;
    return this;
};

export default {
    options: function (options: any) {
        // @ts-ignore
        return new Options(as_array(options));
    },
};
