"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const React = require("react");
const List_1 = require("./List");
const items = [
    { name: 'Luke Szklarz', rank: 1, points: 5758 },
    { name: 'Rayan Isran', rank: 2, points: 5743 },
    { name: 'Daniel Coelho', rank: 3, points: 5722 },
    { name: 'David Clemens', rank: 4, points: 5699 },
    { name: 'Marc Rützou', rank: 5, points: 5633 },
    { name: 'Bryan Bosshardt', rank: 6, points: 5566 },
    { name: 'Karl Jobst', rank: 7, points: 5510 },
    { name: 'Dan Parker', rank: 8, points: 5449 },
    { name: 'Ryan White', rank: 9, points: 5343 },
    { name: 'Jim Barrett', rank: 10, points: 5312 }
];
class App extends React.Component {
    render() {
        return (React.createElement(List_1.List, { items: items }));
    }
}
exports.App = App;
//# sourceMappingURL=App.js.map