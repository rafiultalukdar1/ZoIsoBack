/** Black "wipe from both sides" hover effect shared by all pill buttons. */
const fillHover =
  'overflow-hidden ' +
  'before:absolute before:left-0 before:top-0 before:-z-10 before:block before:h-full before:w-0 before:bg-black before:transition-[width] before:duration-[400ms] ' +
  'after:absolute after:right-0 after:top-0 after:-z-10 after:block after:h-full after:w-0 after:bg-black after:transition-[width] after:duration-[400ms] ' +
  'hover:before:w-full hover:after:w-full';

export default fillHover;
