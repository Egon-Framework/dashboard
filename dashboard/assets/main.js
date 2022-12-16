// Dummy data for populating the webpage
const dashboardVersion = "0.0.1"
const termsContent = "This is the application license."
const pipelineTitle = "My Awesome Pipeline"
const pipelineID = "9ec463ad-db81-4ab2-bc9c-3ee3962ddb34"
const pipelineDescription = "This is the description for a pipeline built using example data."

/**
 * Update dashboard content for the first time.
 *
 * Use preliminary data to populate all missing information in
 * the dashboard template.
 */
function setup() {
    $(".eg-dashboard-version").map(function () {
        this.textContent = dashboardVersion;
    });

    $(".eg-dashboard-terms").map(function () {
        this.textContent = termsContent;
    });

    $(".eg-pipeline-title").map(function () {
        this.textContent = pipelineTitle;
    });

    $(".eg-pipeline-id").map(function () {
        this.textContent = pipelineID;
    });

    $(".eg-pipeline-description").map(function () {
        this.textContent = pipelineDescription;
    });
}

$(document).ready(setup);