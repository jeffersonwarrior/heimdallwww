Hero centering diagnosis (from notcentered.json):

- The left text block’s visual center is ~118.5px left of the viewport center because the right NetworkVisual participates in the 60/40 flex layout (lg:w-3/5 vs lg:w-2/5).
- The decorative graphic increases perceived width on the right, shifting the hero’s centroid.

Fix strategy:

1. Decouple decoration from layout:
   - On lg+, absolutely position the right visual so it does not affect flow.
   - Add pointer-events-none; bound it to right 42vw (max 640px). Hide it on smaller screens.

2. Center the content block itself:
   - Constrain the hero text block to max-w-3xl and center with mx-auto text-center.
   - Keep section as a single-column container with items-center justify-center.

3. Keep section container stable:
   - Use: relative min-h-screen flex items-center justify-center overflow-hidden.

Classes to apply:

- Section: relative min-h-screen flex items-center justify-center overflow-hidden
- Left content: z-10 w-full max-w-3xl mx-auto text-center
- Right visual wrapper (lg+ only): hidden lg:block absolute right-0 inset-y-0 w-[42vw] max-w-[640px] pointer-events-none

Rationale:

- The text block is centered to viewport rather than within a two-column grid.
- The decorative visual remains visible but no longer alters content geometry.
