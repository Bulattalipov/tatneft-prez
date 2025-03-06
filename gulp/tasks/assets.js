import gulp from 'gulp';
import config from '../config';

const fontsBuild = () => (
  gulp.src(`${config.src.fonts}/**/*`)
    .pipe(gulp.dest(config.dest.fonts))
);

const faviconBuild = () => (
  gulp.src(`${config.src.favicon}/**/*`)
    .pipe(gulp.dest(config.dest.favicon))
);

const jsBackendBuild = () => (
  gulp.src(`${config.src.backendJs}/*.js`)
    .pipe(gulp.dest(config.dest.backendJs))
);

const iconsBuild = () => (
  gulp.src(`${config.src.icons}/**/*`)
    .pipe(gulp.dest(config.dest.icons))
);

const mediaBuild = () => {
  return gulp.src(`${config.src.media}/**/*`)
    .pipe(gulp.dest(config.dest.media))
}

export const assetsBuild = gulp.parallel(fontsBuild, faviconBuild, jsBackendBuild, iconsBuild, mediaBuild);

export const assetsWatch = () => {
  gulp.watch(`${config.src.fonts}/**/*`, fontsBuild);
  gulp.watch(`${config.src.favicon}/**/*`, faviconBuild);
  gulp.watch(`${config.src.backendJs}/**/*`, jsBackendBuild);
  gulp.watch(`${config.src.icons}/**/*`, iconsBuild);
  gulp.watch(`${config.src.media}/**/*`, mediaBuild);
};
