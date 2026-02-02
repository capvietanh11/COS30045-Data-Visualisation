# COS30045 Data Visualisation - Exercise 3

This repository contains the files for Exercise 3, focused on communicating data insights through storytelling and visualisation. The project explores TV energy consumption data to help audiences make informed decisions.

## Data Story: The True Cost of Screen Size

### Target Audience
The primary audience for this story is **Australian Homeowners and Budget-Conscious Tech Shoppers**.
* **Characteristics**: These users are looking to upgrade their home entertainment systems but are concerned about long-term electricity costs and environmental impact.
* **Key Questions**: 
    - Which brand offer more model to choose from?
    - Which TV brands/models offer the best "Energy-to-Size" ratio?


---

## About the Data

### Data Source
The dataset used is `tv_2026_01_07.csv`. This file contains a snapshot of television models available in early 2026, including their energy star ratings, screen dimensions, and display technologies.

### Data Processing
The data was prepared using a **KNIME Analytics Platform** workflow:
* **Missing Value Handling**: A `Missing Value` node was used to clean incomplete entries.
* **Deduplication**: A `Duplicate Row Filter` was applied to ensure each TV model is represented only once.
* **Feature Engineering**: `Math Formula` and `Expression` nodes were utilized to calculate energy efficiency metrics and annual operating costs.
* **Aggregation**: `GroupBy` nodes were used to find the average energy consumption per brand and display type.

### Privacy
The dataset contains technical product specifications and publicly available energy ratings. It does not contain any personal consumer's datas.

### Accuracy and Limitations
* **Accuracy**: The data reflects manufacturer-reported energy ratings as of January 2026.
* **Limitations**: Actual energy consumption may vary based on user habits (e.g., brightness settings and daily hours of use) which are not captured in this laboratory-tested dataset.

### Ethics
We have taken care to present the data neutrally. Brands are compared based on objective energy ratings to prevent unfair bias, and the visualisations aim to provide transparency rather than promote specific manufacturers.

---

## AI Declaration

This project utilized Generative AI tools (Gemini) to assist in the following areas:
- **Project Documentation**: Structuring the README and drafting the Data Story narrative.
- **Code Assistance**: Refining the JavaScript logic for the single-page application navigation and assisting with HTML structure.

**Verification**: All AI-generated content was reviewed for technical accuracy against the KNIME workflow outputs and modified to comply with the COS30045 unit standards.

