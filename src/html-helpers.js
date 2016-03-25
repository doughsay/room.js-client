import ansiUp from 'ansi_up';
const { ansi_to_html: ansiToHtml, escape_for_html: escapeForHtml, linkify } = ansiUp;

export function colorize(str) {
  return linkify(ansiToHtml(str));
}

export function escapeHTML(str) {
  return escapeForHtml(str);
}
