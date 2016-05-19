/* global linkifyHtml */
import ansiUp from 'ansi_up';
const { ansi_to_html: ansiToHtml, escape_for_html: escapeForHtml } = ansiUp;

function linkifyCommands(str) {
  const pattern = /#cmd\[(.*?)\]/g;
  return str.replace(pattern, (match, capture) => `<a href='${match}'>${capture}</a>`);
}

export function colorize(str) {
  return linkifyCommands(linkifyHtml(ansiToHtml(str, { use_classes: true })));
}

export function escapeHTML(str) {
  return escapeForHtml(str);
}
