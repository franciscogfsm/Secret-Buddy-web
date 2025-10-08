declare module "animejs/lib/anime.es.js" {
  // Minimal typing for animejs used in this project
  type AnimeTarget = Element | HTMLElement | string | NodeList | Array<Element>;

  interface AnimeParams {
    targets?: AnimeTarget;
    [key: string]: any;
  }

  interface AnimeStatic {
    (params?: AnimeParams): any;
    stagger: (
      value: number,
      opts?: { start?: number }
    ) => (el: any, i: number) => number;
    setDashoffset: number | ((el: any) => number);
  }

  const anime: AnimeStatic;
  export default anime;
}
