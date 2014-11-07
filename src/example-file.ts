

class Example {

    // Properties
    private stage: Something.Stage;
    private renderer: Something.PixiRenderer;

    private static id: string;

    constructor(private color:number, private ready:Function) {
        window.addEventListener('load', () => { this.initialize(); });
    }

    private initialize() {

        // Get main canvas
        var canvas:HTMLCanvasElement = <HTMLCanvasElement> document.getElementById('canvas');

        // Ready
        this.ready();
        this.ready = null;
    }

    public animate(enterFrame:Function) {
        // Request next animation frame
        requestAnimationFrame(() => { this.animate(enterFrame); });

        // Call enter frame callback
        enterFrame();
    }
}

