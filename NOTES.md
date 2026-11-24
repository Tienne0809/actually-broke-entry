# Rationale

The brief asks for error copy that names the real failure, lands as funny on a single read, and could actually ship in a product. Most real error messages fail all three: they say "something went wrong," blame the user's connection, or hide behind a code.

The line I wrote:

> Your file was not saved. Not a glitch: we ran out of disk, said nothing, and the backup you are imagining does not exist.

Why it works:

- **Names the real failure.** The save did not happen, and the cause is stated outright: the disk filled up. No euphemism, no "unexpected error."
- **Admits the cover-up.** "Said nothing" is the part users already suspect — software usually knows it is failing long before it tells anyone. Saying it out loud is the joke and the honesty at once.
- **Kills the false hope.** "The backup you are imagining does not exist" pre-empts the user's next five minutes of clicking around looking for an autosave that was never written. That is genuinely useful, and the bluntness is what makes it funny.
- **Shippable shape.** One message, no jargon, no error code, no exclamation marks, no fake cheer. It fits a dialog, a toast, or a log line, and it tells the user the only two things they need: your work is gone, and it was our fault.
