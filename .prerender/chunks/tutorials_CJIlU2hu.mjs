import { b as getDb } from './articles_DuypiJQp.mjs';

let tutorialSeriesCache = null;
async function getCachedTutorialSeries(db) {
  if (!tutorialSeriesCache) {
    tutorialSeriesCache = await db.tutorialSeries.findMany({
      include: {
        lessons: {
          orderBy: { sortOrder: "asc" }
        }
      }
    });
  }
  return tutorialSeriesCache;
}
async function getAllTutorialSeries(lang = "zh") {
  const db = getDb();
  const seriesList = await getCachedTutorialSeries(db);
  const statusFilter = lang === "en" ? ["published", "published_en", "published_all"] : ["published", "published_zh", "published_all"];
  const filteredSeries = seriesList.filter((s) => statusFilter.includes(s.status)).map((s) => {
    const lessons = s.lessons.filter((l) => statusFilter.includes(l.status)).map((l) => ({
      ...l,
      title: lang === "en" ? l.titleEn || l.title : l.title,
      summary: lang === "en" ? l.summaryEn || l.summary : l.summary
    }));
    return {
      ...s,
      title: lang === "en" ? s.titleEn || s.title : s.title,
      description: lang === "en" ? s.descriptionEn || s.description : s.description,
      lessons
    };
  }).sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
  return filteredSeries;
}
async function getSeriesWithLessons(slug, lang = "zh") {
  const db = getDb();
  const seriesList = await getCachedTutorialSeries(db);
  const statusFilter = lang === "en" ? ["published", "published_en", "published_all"] : ["published", "published_zh", "published_all"];
  const s = seriesList.find((s2) => s2.slug === slug);
  if (!s) return null;
  return {
    ...s,
    title: lang === "en" ? s.titleEn || s.title : s.title,
    description: lang === "en" ? s.descriptionEn || s.description : s.description,
    lessons: s.lessons.filter((l) => statusFilter.includes(l.status)).map((l) => ({
      ...l,
      title: lang === "en" ? l.titleEn || l.title : l.title,
      summary: lang === "en" ? l.summaryEn || l.summary : l.summary
    }))
  };
}
async function getLessonWithNav(seriesSlug, lessonSlug, lang = "en") {
  const db = getDb();
  const seriesList = await getCachedTutorialSeries(db);
  const statusFilter = lang === "en" ? ["published", "published_en", "published_all"] : ["published", "published_zh", "published_all"];
  const series = seriesList.find((s) => s.slug === seriesSlug);
  if (!series) return null;
  const filteredLessons = series.lessons.filter((l) => statusFilter.includes(l.status));
  const lessonIndex = filteredLessons.findIndex((l) => l.slug === lessonSlug);
  if (lessonIndex === -1) return null;
  const lesson = filteredLessons[lessonIndex];
  const mappedLesson = {
    ...lesson,
    title: lang === "en" ? lesson.titleEn || lesson.title : lesson.title,
    summary: lang === "en" ? lesson.summaryEn || lesson.summary : lesson.summary,
    content: lang === "en" ? lesson.contentEn || lesson.content : lesson.content
  };
  const mappedSeries = {
    ...series,
    title: lang === "en" ? series.titleEn || series.title : series.title
  };
  const allLessons = filteredLessons.map((l, i) => ({
    slug: l.slug,
    title: lang === "en" ? l.titleEn || l.title : l.title,
    isActive: l.slug === lessonSlug,
    index: i + 1
  }));
  return {
    series: mappedSeries,
    lesson: mappedLesson,
    allLessons,
    nav: {
      prev: lessonIndex > 0 ? {
        ...filteredLessons[lessonIndex - 1],
        title: lang === "en" ? filteredLessons[lessonIndex - 1].titleEn || filteredLessons[lessonIndex - 1].title : filteredLessons[lessonIndex - 1].title
      } : null,
      next: lessonIndex < filteredLessons.length - 1 ? {
        ...filteredLessons[lessonIndex + 1],
        title: lang === "en" ? filteredLessons[lessonIndex + 1].titleEn || filteredLessons[lessonIndex + 1].title : filteredLessons[lessonIndex + 1].title
      } : null
    }
  };
}
async function getAllLessonPaths() {
  const db = getDb();
  const seriesList = await getCachedTutorialSeries(db);
  const statusList = ["published", "published_zh", "published_en", "published_all"];
  const paths = [];
  seriesList.filter((s) => statusList.includes(s.status)).forEach((s) => {
    s.lessons.filter((l) => statusList.includes(l.status)).forEach((l) => {
      paths.push({ series: s.slug, lesson: l.slug });
    });
  });
  return paths;
}

export { getAllLessonPaths as a, getLessonWithNav as b, getSeriesWithLessons as c, getAllTutorialSeries as g };
