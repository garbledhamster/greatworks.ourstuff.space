# Great Books Compass

A static, idea-driven compass for Great Books of the Western World. Search by feeling or idea, get a clear reading pick with reasons.

## Features

- 🔍 **Compass Mode**: Search by feeling, problem, or idea to find matching books
- 📚 **Library Mode**: Browse all 60 GBWW volumes with filtering
- ⭐ **Favorites Shelf**: Star books to save them locally
- 💾 **Export Function**: Generate standalone HTML files for each book
- 🎯 **Transparent Scoring**: See exactly why books are recommended
- 🌐 **100% Client-Side**: No server required, works on GitHub Pages

## Project Structure

The codebase is organized into logical modules for maintainability and extensibility:

```
index.html                 # Main HTML structure
js/
├── main.js               # Application entry point and wiring
├── data/
│   ├── books.js          # GBWW catalog (60 volumes)
│   └── lexicon.js        # Feeling/idea → signal mappings
├── core/
│   ├── signals.js        # Signal extraction from user input
│   └── scoring.js        # Book scoring and matching logic
├── ui/
│   ├── compass.js        # Compass mode UI components
│   ├── library.js        # Library/browse mode UI
│   ├── modal.js          # Book detail modal
│   └── shelf.js          # Favorites shelf management
└── utils/
    ├── dom.js            # DOM utility functions
    ├── storage.js        # localStorage operations
    └── export.js         # Book file export functionality
```

## Module Responsibilities

### Data Layer (`js/data/`)
- **books.js**: Contains the complete GBWW catalog with metadata (themes, moods, authors, works)
- **lexicon.js**: Maps user feelings/problems to themes and moods for matching

### Core Logic (`js/core/`)
- **signals.js**: Extracts and normalizes signals from user input
- **scoring.js**: Scores books based on signals and applies contextual bonuses

### UI Layer (`js/ui/`)
- **compass.js**: Handles search interface and results display
- **library.js**: Manages library view with filtering
- **modal.js**: Book detail popups
- **shelf.js**: Favorites/starred books management

### Utilities (`js/utils/`)
- **dom.js**: Common DOM operations (selectors, escaping, badges)
- **storage.js**: localStorage wrapper for persistence
- **export.js**: Generates standalone HTML files for each book

## How It Works

1. User enters a feeling or idea (e.g., "I'm anxious" or "What is justice?")
2. **Signal Extraction** (`signals.js`): Parses input and maps to themes/moods
3. **Scoring** (`scoring.js`): Matches signals against book metadata
4. **Rendering** (`compass.js`): Displays ranked recommendations with explanations

## Development

The application uses ES6 modules for organization:

```bash
# Serve locally (any static server works)
python3 -m http.server 8000

# Open in browser
open http://localhost:8000
```

## Extending the System

### Adding New Books
Edit `js/data/books.js` and add entries using the `mk()` function:

```javascript
mk(61, "new-book", "Title", ["Author"], ["Works"], 
   ["themes"], ["moods"], "length", {category:"category"})
```

### Adding New Signal Mappings
Edit `js/data/lexicon.js` to add new keyword → theme/mood mappings:

```javascript
{ match: ["keyword1", "keyword2"], 
  moods: ["mood1"], 
  themes: ["theme1"], 
  w: 3 }
```

### Modifying Scoring Logic
Edit `js/core/scoring.js` to adjust how books are scored based on signals.

## Browser Compatibility

Requires modern browser with ES6 module support (all current browsers).

## License

Open source - see repository for details.
