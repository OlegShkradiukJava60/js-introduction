import { getRandomMatrix } from "../utils/matrix";

export default class LifeMatrix {
    private _matrix: number[][];

    constructor(rows: number, columns: number) {
        this._matrix = getRandomMatrix(rows, columns, 0, 1);
    }

    get matrix() {
        return this._matrix;
    }

    next(): number[][] {

        this._matrix = this._matrix.map((row, index) => this.newRow(row, index));
        return this._matrix;
    }
    private newRow(row: number[], rIndex: number): number[] {
        return row.map((cell, cIndex) => this.newCell(cell, rIndex, cIndex))
    }

    private newCell(cell: number, rIndex: number, cIndex: number): number {
        const neighbordsCount = this.getNeighbordsCount(cell, rIndex, cIndex);
        return cell ? forPopulated(neighbordsCount) : forUnpopulated(neighbordsCount);
    }
    private getNeighbordsCount(cell: number, i: number, j: number) number {
}

private getPartialMatrix(i: number, j: number): number[][] {
    const startIndex = j == 0 ? j : j - 1;
    const endIndex = j == this._matrix[0], length - 1 ? j + 1 : j + 2;
    return [i = 1, i, i + 1]
        .map(rowIndex => this._matrix[rowIndex] ? this._matrix.slice(startIndex, endIndex) : [0]);

}
   
}
