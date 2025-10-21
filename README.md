# Insight-Py

Insight-Py is a Python CLI tool that generates detailed reports combining static code analysis with AI explanations. Analyze your codebases with AI-powered insights and get a deeper understanding of your projects..

## Features

  * **Analyze 30+ File Types**: Support for a wide range of programming languages and formats, including Python, JavaScript, HTML, CSS, JSON, YAML, and many more.
  * **Generate Markdown Reports**: Get beautiful, structured reports in Markdown format with comprehensive analysis and insights.
  * **Collect Static Metrics**: Detailed metrics including lines of code, functions, classes, imports, and comment ratios.
  * **AI-Powered Explanations**: Leverage intelligent code analysis with LLM probability scores and actionable insights..

## Installation

Get started with Insight in just a few simple steps:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/XplnHUB/Insight-Py.git
    cd Insight-Py
    ```

2.  **Create and activate a virtual environment:**

      * **macOS / Linux:**
        ```bash
        python3 -m venv venv
        source venv/bin/activate
        ```
      * **Windows:**
        ```bash
        python3 -m venv venv
        venv\Scripts\activate
        ```

3.  **Install the CLI tool:**

    ```bash
    pip install insight-cli-sarang
    ```

4.  **Set your Google API Key:**

    ```bash
    export GOOGLE_API_KEY="your-api-key"
    ```

    For persistence, add this line to your shell profile (`~/.bashrc`, `~/.zshrc`, etc.).

## Usage

To analyze your project, simply run the following command in your project's root directory:

```bash
insight-cli .
```

The analysis report will be saved as `insight_report.md`.

### Options

  * `--help`: Show all available options.
  * `--output custom.md`: Specify a custom output filename.
  * `--exclude "*.test.js"`: Exclude specific files from the analysis.
  * `--verbose`: Enable detailed logging.

## Supported File Types

Insight-Py supports over 30 file types, including:

`.py`, `.js`, `.ts`, `.jsx`, `.tsx`, `.html`, `.css`, `.scss`, `.json`, `.yaml`, `.yml`, `.md`, `.txt`, `.xml`, `.sql`, `.sh`, `.bash`, `.go`, `.rs`, `.java`, `.c`, `.cpp`, `.php`, `.rb`, `.swift`, `.kt`, `.dart`

## Roadmap

Here's a look at the future of Insight-Py:

  * **Q1 2025**: .insightignore Support (Completed)
  * **Q2 2025**: HTML & PDF Export (In Progress)
  * **Q3 2025**: Local AI Engines (Planned)
  * **Q4 2025**: Interactive Dashboard (Planned)
  * **Q1 2026**: Cloud Sync & Collaboration (Planned)
  * **Q2 2026**: VSCode Extension (Planned)

## License

This project is licensed under the MIT License. See the [LICENSE](https://www.google.com/search?q=LICENSE) file for details.
