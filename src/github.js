import chalk from 'chalk';

function printTitle() {
	const title = `
Keep up with the trend
`;
  return title;
}

function printBorder() {
	
}

function printProject(rank) {
	const literals = `
•••••••••••••••••••••••${chalk.black.bold.bgCyan(rank)}••••••••••••••••••••••••••
${chalk.black.bgYellow.bold('usablica/intro.js')}
${chalk.magenta('A better way for new feature introduction and step-by-step users guide for your website and project.')}
${chalk.yellow('JavaScript')} ${chalk.green('•')} ${chalk.blue('223')} ${chalk.green('stars')} ${chalk.green('•')} ${chalk.red('today')}
`;
 return literals;
}

function printTrend() {
  printTitle();
  printProject(1);
  printProject(2);
}

export default function githubTrend() {
  printTrend();
}
