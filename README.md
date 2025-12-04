# Next Designer

Next Designer is a database design tool built with React and TypeScript that allows you to visually create and manage database schemas using a drag-and-drop interface.

![Project Screenshot](#)

## Features

- Visual database schema design
- Drag-and-drop interface for creating tables
- Table editor for defining table names and fields
- Connection editor for defining relationships between tables
- Support for primary key identification
- Exportable designs
- Cross-platform desktop application support

## Technologies Used

- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
- [Vite](https://vitejs.dev/) - Fast build tool and development server
- [XY Flow](https://xyflow.com/) - Library for creating node-based UIs
- [React Bootstrap](https://react-bootstrap.github.io/) - UI components
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Tauri](https://tauri.app/) - Framework for building desktop applications

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/next-desinger.git
   ```

2. Navigate to the project directory:
   ```bash
   cd next-desinger
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Development

To run the application in development mode:

```bash
# Run as web application
npm run web

# Run as desktop application
npm run desktop
```

### Building

To build the application for production:

```bash
# Build web application
npm run build

# Build desktop application
npm run tauri build
```

## Usage

1. Open the application
2. Use the toolbar at the top to select different tools:
   - Selection tool: Select and move elements
   - Table tool: Create new tables
   - Rectangle tool: Create rectangles (planned feature)
   - Link tool: Create connections between elements
3. Click on a table to edit its properties:
   - Change table name
   - Add/remove fields
   - Define field types
   - Set primary keys
4. Connect tables by dragging from one table to another
5. Click on connections to edit their properties

## Project Structure

```
next-desinger/
├── app/                 # Main application code
│   ├── components/      # Reusable components
│   ├── nodes/           # Custom node types for XY Flow
│   └── app.tsx         # Main application component
├── desktop/             # Tauri desktop application configuration
│   └── src-tauri/
├── dist/                # Built application files
├── index.html           # Main HTML file
└── vite.config.ts       # Vite configuration
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Kevin Peng - kevin.penn@outlook.com

## Acknowledgments

- Thanks to XY Flow for providing an excellent library for creating node-based UIs
- Thanks to the React and TypeScript communities for excellent documentation and resources