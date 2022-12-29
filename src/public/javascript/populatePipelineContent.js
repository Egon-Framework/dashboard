import {PipelineDiagram} from "./pipelineDiagram.js";

const dummyPipelineURL = "http://127.0.0.1:4010/pipeline/57d92d7e-58c0-48ec-bed2-2e8b507161bb";

function populatePage(data) {
  let pipeline = new PipelineDiagram(data, "0.1");

  /* map class attributes to text content */
  let staticContentMap = {
    ".eg-pipeline-title": pipeline.name,
    ".eg-pipeline-id": pipeline.id,
    ".eg-pipeline-description": pipeline.description,
  };

  for (let key in staticContentMap) {
    $(key).map(function () {
      this.textContent = staticContentMap[key];
    });
  }
}

$(function () {
  $.ajax(dummyPipelineURL, {
    data: {
      pipeline: "57d92d7e-58c0-48ec-bed2-2e8b507161bb",
      token: "123",
    },
    success: populatePage,
  });
});
