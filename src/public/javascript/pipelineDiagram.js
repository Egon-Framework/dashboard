/**
 * Parse pipeline data from an API call and expose it in a useful way.
 *
 * Parse pipeline information provided by a given API version.
 */
export class PipelineDiagram {
  id;
  name;
  description;
  #nodes;
  #connectors;

  /**
   * @param {Object} data    Pipeline data returned from the Egon status API.
   * @param {String} version API version used to retrieve the `data` argument.
   */
  constructor(data, version) {
    if (version.startsWith("0")) {
      this.#construct_from_v0(data);
    } else {
      console.log(`Unsupported API version ${version}`);
    }
  }

  /**
   * Populate class fields using data from an API running version 0.1
   *
   * @param {object} data Pipeline data returned from an API call
   */
  #construct_from_v0(data) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;

    this.#nodes = data.nodes;
    this.#connectors = data.connectors;
  }
}
