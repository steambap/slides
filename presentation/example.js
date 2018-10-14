export default `
// Init Canvas stuff
doc := js.Global().Get("document")
canvasEl := doc.Call("getElementById", "mycanvas")
width = doc.Get("body").Get("clientWidth").Float()
height = doc.Get("body").Get("clientHeight").Float()
canvasEl.Set("width", width)
canvasEl.Set("height", height)
ctx = canvasEl.Call("getContext", "2d")

done := make(chan struct{}, 0)

dt := DotThing{speed: 160, size: 6}

mouseMoveEvt := js.NewCallback(func(args []js.Value) {
	e := args[0]
	mousePos[0] = e.Get("clientX").Float()
	mousePos[1] = e.Get("clientY").Float()
})
defer mouseMoveEvt.Release()
`;
