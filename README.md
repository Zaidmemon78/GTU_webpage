# GTU Student Portal Replica & Feature Enhancement (Hackathon Project)

This project is a submission for the [Hackathon Name - Agar Pata Hai Toh Likhna] hackathon. The primary goal was to replicate the core visual elements and basic structure of the existing Gujarat Technological University (GTU) student portal and enhance it with a new, useful, and visually integrated feature within a 12-hour timeframe.

## Objective

*   **Replicate:** To mimic the look and feel of key components of the GTU student portal ([student.gtu.ac.in](https://student.gtu.ac.in/)), focusing on the header, sidebar navigation, and the general layout/styling of information panels.
*   **Enhance:** To add a completely new feature – "Company Suggestions Based on CPI/CGPA" – that provides value to students.
*   **Integrate:** To ensure the new feature visually blends seamlessly with the existing replicated design, appearing as if it were part of the original portal.
*   **Frontend Focus:** The primary focus was on frontend implementation (HTML, CSS, JavaScript) to achieve visual accuracy and feature functionality within the hackathon constraints. Backend logic uses mock/hardcoded data.

## The Added Feature: Company Suggestions

A new section, "Company Suggestions Based on CPI/CGPA," has been added to the main content area and as the first item in the sidebar navigation.

*   **Purpose:** Helps students get a preliminary idea of potential companies they might be eligible for based on their academic CPI/CGPA, using *approximate* and *predefined* cutoffs for demonstration purposes.
*   **Functionality:**
    *   The user enters their CPI/CGPA into an input field.
    *   Clicking "Suggest Companies" triggers a JavaScript function.
    *   This function filters a hardcoded list of sample companies (defined in `js/script.js`) based on the entered CPI.
    *   Eligible companies (where CPI >= cutoff) are displayed in a list format below the input.
    *   Basic input validation is included.
*   **Data:** The company list and cutoffs are **mock data** stored directly in the JavaScript file for this hackathon demo. It does not use real-time placement data.

## Visual Replication & Integration Comparison

Significant effort was made to match the original GTU portal's design language.

| Element         | Original GTU Portal Screenshot                    | Replicated Version Screenshot                        | Notes                                                                 |
| :-------------- | :------------------------------------------------: | :----------------------------------------------------: | :-------------------------------------------------------------------- |
| **Header**      | [PLACEHOLDER: Screenshot Link/Path of Original Header] | [PLACEHOLDER: Screenshot Link/Path of Your Header]       | Matched background color, logo placement, title style, logout button. |
| **Sidebar**     | [PLACEHOLDER: Screenshot Link/Path of Original Sidebar] | [PLACEHOLDER: Screenshot Link/Path of Your Sidebar]      | Matched background color, link styling, icons, active state, hover.   |
| **Feature Panel**| (N/A - New Feature)                               | [PLACEHOLDER: Screenshot Link/Path of Your Feature Panel]| Styled the new feature using panels similar to GTU's info sections.   |