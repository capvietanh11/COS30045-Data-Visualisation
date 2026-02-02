# COS30045 Data Visualisation - Exercise 3

This repository contains the files for Exercise 3, focused on communicating data insights through storytelling and visualisation. The project explores TV energy consumption data to help audiences make informed decisions.

## Data Story: The True Cost of Screen Size

### Target Audience
The primary audience for this story is **Australian Homeowners and Budget-Conscious Tech Shoppers**.
* **Characteristics**: These users are looking to upgrade their home entertainment systems but are concerned about long-term electricity costs and environmental impact.
* **Key Questions**: 
    - Does choosing a 4K TV significantly increase my annual energy bill compared to standard HD?
    - Which TV brands offer the best "Energy-to-Size" ratio?

### Visualisation Guidelines
- **Clarity First**: Avoid clutter; use annotations to highlight the most efficient models.
- **Contextual Pricing**: Translate energy units (kWh) into estimated Australian Dollars ($) where possible to make the data relatable.
- **Honest Comparison**: Ensure all bar charts start at a zero baseline to avoid misleading the audience.

---

## About the Data

### Data Source
[cite_start]The dataset used is `tv_2026_01_07.csv`. This file contains a snapshot of television models available in early 2026, including their energy star ratings, screen dimensions, and display technologies.

### Data Processing
[cite_start]The data was prepared using a **KNIME Analytics Platform** workflow[cite: 51]:
* [cite_start]**Missing Value Handling**: A `Missing Value` node was used to clean incomplete entries[cite: 38].
* [cite_start]**Deduplication**: A `Duplicate Row Filter` was applied to ensure each TV model is represented only once[cite: 34].
* [cite_start]**Feature Engineering**: `Math Formula` and `Expression` nodes were utilized to calculate energy efficiency metrics and annual operating costs[cite: 35, 38].
* [cite_start]**Aggregation**: `GroupBy` nodes were used to find the average energy consumption per brand and display type[cite: 37, 38].

### Privacy
The dataset contains technical product specifications and publicly available energy ratings. It does not contain any Personally Identifiable Information (PII) or private consumer data.

### Accuracy and Limitations
* [cite_start]**Accuracy**: The data reflects manufacturer-reported energy ratings as of January 2026[cite: 34].
* **Limitations**: Actual energy consumption may vary based on user habits (e.g., brightness settings and daily hours of use) which are not captured in this laboratory-tested dataset.

### Ethics
We have taken care to present the data neutrally. Brands are compared based on objective energy ratings to prevent unfair bias, and the visualisations aim to provide transparency rather than promote specific manufacturers.

---

## AI Declaration

This project utilized Generative AI tools (Gemini) to assist in the following areas:
- **Project Documentation**: Structuring the README and drafting the Data Story narrative based on unit requirements.
- **Code Assistance**: Refining the JavaScript logic for the single-page application navigation and assisting with HTML structure.

**Verification**: All AI-generated content was reviewed for technical accuracy against the KNIME workflow outputs and modified to comply with the COS30045 unit standards.

---

## Features

- **Interactive Navigation**: Single-page application feel using JavaScript to toggle content sections.
- **Responsive Design**: Layouts that adapt to desktop and mobile screens.
- [cite_start]**Visual Evidence**: Integration of charts (Bar, Pie, and Scatter plots) exported from KNIME to support the data story[cite: 34, 38, 39].