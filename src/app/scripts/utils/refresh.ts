export default class Refresh {
    private static interval: ReturnType<typeof setInterval> | null = null

    static refreshTime = 180000

    static resetRefreshTime(span: number) {
        this.refreshTime = span
    }

    static countdownToRefresh(
        func: () => void
    ) {
        if (this.interval) {
            return
        }

        this.interval = setInterval(() => {
            this.refreshTime -= 1000

            if (this.refreshTime <= 0) {
                this.refreshTime = 0

                clearInterval(this.interval!)
                this.interval = null

                func()

                this.resetRefreshTime(180000)
                this.countdownToRefresh(func)
            }
        }, 1000)
    }

    static stopCountdown() {
        if (this.interval) {
            clearInterval(this.interval)
            this.interval = null
        }
    }
}