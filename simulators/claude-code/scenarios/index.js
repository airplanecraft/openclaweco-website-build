/**
 * Scenario Registry — shared across all chapter pages
 */
const ScenarioRegistry = {
  _chapters: [],
  register(chapter) { this._chapters.push(chapter); },
  getAll() { return this._chapters; },
  getById(id) { return this._chapters.find(ch => ch.id === id); }
};
