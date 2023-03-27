/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: "autogenerated", dirName: "." }],

  docs: [
    {
      type: "category",
      label: "Authentication",
      items: ["Authentication/over-view"],
    },
  ],
  codingStyleGuide: [
    "CodingStyleGuide/over-view",
    "CodingStyleGuide/common",
    "CodingStyleGuide/JavaScript/index",
    {
      type: "category",
      label: "FrontEnd",
      items: ["CodingStyleGuide/FrontEnd/ReactJs/index"],
    },
  ],
  packages: [
    "Packages/EslintConfigAntsomi/introduction",
    {
      type: "category",
      label: "Getting Started",
      items: ["Packages/EslintConfigAntsomi/GettingStarted/installation"],
    },
  ],
  workflow: ["Workflow/OverView/index"],
  conventionalCommits: [
    "Conventions/ConventionalCommits/over-view",
    "Conventions/ConventionalCommits/rules",
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
