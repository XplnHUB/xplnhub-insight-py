import React from 'react';
import { X, Code, FileCode, Braces, Terminal } from 'lucide-react';

interface LanguageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LanguageModal: React.FC<LanguageModalProps> = ({ isOpen, onClose }) => {
  const languageCategories = [
    {
      category: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      color: "cyan",
      languages: [
        {
          name: "Python",
          extensions: [".py"],
          evaluation: "Full AST analysis with function, class, and import detection"
        },
        {
          name: "JavaScript",
          extensions: [".js"],
          evaluation: "ES6+ syntax analysis, module detection, and complexity metrics"
        },
        {
          name: "TypeScript",
          extensions: [".ts", ".tsx"],
          evaluation: "Type analysis, interface detection, and decorator support"
        },
        {
          name: "Java",
          extensions: [".java"],
          evaluation: "Class hierarchy analysis, package structure, and OOP patterns"
        },
        {
          name: "C/C++",
          extensions: [".c", ".cpp"],
          evaluation: "Header analysis, memory management patterns, and pointer usage"
        },
        {
          name: "Go",
          extensions: [".go"],
          evaluation: "Package analysis, goroutine detection, and interface patterns"
        },
        {
          name: "Rust",
          extensions: [".rs"],
          evaluation: "Ownership analysis, trait detection, and lifetime patterns"
        },
        {
          name: "PHP",
          extensions: [".php"],
          evaluation: "Class analysis, namespace detection, and framework patterns"
        },
        {
          name: "Ruby",
          extensions: [".rb"],
          evaluation: "Module analysis, metaprogramming detection, and DSL patterns"
        },
        {
          name: "Swift",
          extensions: [".swift"],
          evaluation: "Protocol analysis, optional handling, and SwiftUI patterns"
        },
        {
          name: "Kotlin",
          extensions: [".kt"],
          evaluation: "Coroutine detection, extension function analysis, and null safety"
        },
        {
          name: "Dart",
          extensions: [".dart"],
          evaluation: "Widget analysis, async patterns, and Flutter-specific metrics"
        }
      ]
    },
    {
      category: "Web Technologies",
      icon: <Braces className="w-6 h-6" />,
      color: "purple",
      languages: [
        {
          name: "HTML",
          extensions: [".html"],
          evaluation: "DOM structure analysis, semantic HTML detection, and accessibility checks"
        },
        {
          name: "CSS/SCSS",
          extensions: [".css", ".scss"],
          evaluation: "Selector complexity, specificity analysis, and responsive design patterns"
        },
        {
          name: "JSX/TSX",
          extensions: [".jsx", ".tsx"],
          evaluation: "Component structure, props analysis, and React patterns"
        },
      ]
    },
    {
      category: "Data & Configuration",
      icon: <FileCode className="w-6 h-6" />,
      color: "pink",
      languages: [
        {
          name: "JSON",
          extensions: [".json"],
          evaluation: "Structure validation, nesting depth, and schema compliance"
        },
        {
          name: "YAML",
          extensions: [".yaml", ".yml"],
          evaluation: "Configuration analysis, indentation validation, and key patterns"
        },
        {
          name: "XML",
          extensions: [".xml"],
          evaluation: "Schema validation, namespace analysis, and hierarchy depth"
        },
        {
          name: "Markdown",
          extensions: [".md"],
          evaluation: "Document structure, heading hierarchy, and link validation"
        },
        {
          name: "Text Files",
          extensions: [".txt"],
          evaluation: "Plain text analysis, line counting, and basic structure detection"
        }
      ]
    },
    {
      category: "Scripts & Shell",
      icon: <Terminal className="w-6 h-6" />,
      color: "green",
      languages: [
        {
          name: "Bash/Shell",
          extensions: [".sh", ".bash"],
          evaluation: "Command analysis, pipe usage, and script complexity"
        },
        {
          name: "SQL",
          extensions: [".sql"],
          evaluation: "Query complexity, join patterns, and optimization opportunities"
        }
      ]
    }
  ];

  if (!isOpen) return null;

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: string } = {
      cyan: "from-cyan-500 to-blue-500",
      purple: "from-purple-500 to-pink-500",
      pink: "from-pink-500 to-rose-500",
      green: "from-green-500 to-emerald-500"
    };
    return colors[color] || colors.cyan;
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="bg-gray-900 border border-cyan-500/30 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-gray-900/95 backdrop-blur-md border-b border-cyan-500/30 p-6 flex items-center justify-between z-10">
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Supported Languages & File Types
            </h2>
            <p className="text-gray-400 mt-2">
              Comprehensive analysis across 30+ file formats
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-120px)] p-6">
          <div className="space-y-8">
            {languageCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="feature-card">
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${getColorClasses(category.color)} flex items-center justify-center`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.languages.map((lang, langIndex) => (
                    <div
                      key={langIndex}
                      className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50 hover:border-cyan-500/50 transition-all"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-lg font-semibold text-cyan-400">{lang.name}</h4>
                        <div className="flex flex-wrap gap-1">
                          {lang.extensions.map((ext, extIndex) => (
                            <span
                              key={extIndex}
                              className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs font-mono rounded"
                            >
                              {ext}
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {lang.evaluation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer Info */}
          <div className="mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-xl">
            <h4 className="text-lg font-semibold text-white mb-2">How Analysis Works</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-[7px] flex-shrink-0" />
                <span><strong>Static Analysis:</strong> Parses code structure without execution</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-[7px] flex-shrink-0" />
                <span><strong>Metrics Collection:</strong> LOC, complexity, dependencies, and patterns</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-[7px] flex-shrink-0" />
                <span><strong>AI Enhancement:</strong> Contextual explanations and improvement suggestions</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-[7px] flex-shrink-0" />
                <span><strong>Report Generation:</strong> Beautiful Markdown output with all findings</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageModal;
