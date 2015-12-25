#!/usr/bin/env node
import chalk from 'chalk';
import githubtrend from '.';
import meow from 'meow';

var cli = meow(`Usage
  githubtrend <text>

  example
    githubtrend 
`);

console.log(githubtrend());
