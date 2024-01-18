const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashLink = (id: string, width: number, height: number) =>
  `https://source.unsplash.com/${id}/${width}x${height}`;

const unsplashPhotos = [
  { id: "8gVv6nxq6gY", width: 1080, height: 800, title: "jnieff" },
  { id: "Dhmn6ete6g8", width: 1080, height: 1620, title: "hi" },
  { id: "RkBTPqPEGDo", width: 1080, height: 720, title: "hi" },
  { id: "Yizrl9N_eDA", width: 1080, height: 721, title: "hi" },
  { id: "KG3TyFi0iTU", width: 1080, height: 1620, title: "hi" },
  { id: "Jztmx9yqjBw", width: 1080, height: 607, title: "hi" },
  { id: "-heLWtuAN3c", width: 1080, height: 608, title: "hi" },
  { id: "xOigCUcFdA8", width: 1080, height: 720, title: "hi" },
  { id: "1azAjl8FTnU", width: 1080, height: 1549, title: "hi" },
  { id: "ALrCdq-ui_Q", width: 1080, height: 720, title: "hi" },
  { id: "twukN12EN7c", width: 1080, height: 694, title: "hi" },
  { id: "9UjEyzA6pP4", width: 1080, height: 1620, title: "hi" },
  { id: "sEXGgun3ZiE", width: 1080, height: 720, title: "hi" },
  { id: "S-cdwrx-YuQ", width: 1080, height: 1440, title: "hi" },
  { id: "q-motCAvPBM", width: 1080, height: 1620, title: "hi" },
  { id: "Xn4L310ztMU", width: 1080, height: 810, title: "hi" },
  { id: "iMchCC-3_fE", width: 1080, height: 610, title: "hi" },
  { id: "X48pUOPKf7A", width: 1080, height: 160, title: "hi" },
  { id: "GbLS6YVXj0U", width: 1080, height: 810, title: "hi" },
  { id: "9CRd1J1rEOM", width: 1080, height: 720, title: "hi" },
  { id: "xKhtkhc9HbQ", width: 1080, height: 1440, title: "hi" }
];

const photos = unsplashPhotos.map((photo) => ({
  src: unsplashLink(photo.id, photo.width, photo.height),
  width: photo.width,
  height: photo.height,
  title: photo.title, // Add a caption property
  srcSet: breakpoints.map((breakpoint) => {
    const height = Math.round((photo.height / photo.width) * breakpoint);
    return {
      src: unsplashLink(photo.id, breakpoint, height),
      width: breakpoint,
      height,
    };
  }),
}));

export default photos;