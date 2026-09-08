export default class Flex {
    static column(more: string): string {
        return `flex flex-col ${more}`
    }

    static row(more: string): string {
        return `flex flex-row ${more}`
    }

    static columnCentered(): string {
        return 'flex flex-col justify-center items-center'
    }

    static rowCentered(): string {
        return 'flex flex-row justify-center items-center'
    }

    static columnJustifyBtwn(): string {
        return 'flex flex-col justify-between items-center'
    }

    static rowJustifyBtwn(): string {
        return 'flex flex-row justify-between items-center'
    }
}