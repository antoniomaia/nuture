const { createCanvas, loadImage } = require('canvas')

const width = 1200
const height = 600

// Write "Awesome!"
function draw(id) {
  const canvas = createCanvas(width, height)
  const context = canvas.getContext('2d')


  if(!id) {
    return canvas
  }
/*  const text = 'Carbon Neutral Company!'

  ctx.font = 'bold 70pt Menlo'
  ctx.textAlign = 'center'
  ctx.fillStyle = '#fff'
  ctx.fillText(text, 600, 170)*/
// Draw line under text
/*  var text = ctx.measureText('Awesome!')
  ctx.strokeStyle = 'rgba(0,0,0,0.5)'
  ctx.beginPath()
  ctx.lineTo(50, 102)
  ctx.lineTo(50 + text.width, 102)
  ctx.stroke()*/

 // background: #649173;  /* fallback for old browsers */
  //background: -webkit-linear-gradient(to right, #DBD5A4, #649173);  /* Chrome 10-25, Safari 5.1-6 */
  //background: linear-gradient(to right, #DBD5A4, #649173); /*

  context.fillStyle = '#649173';                // set the color to 'red'
  context.fillRect (0,0,200,70);           // draw a red box on the whole of the canvas
           // draw a yellow box inside the red one
  context.fillStyle = 'white';                           // set the color back to 'red'
  context.font = '12pt Arial';                   // define the CSS font for writing text
  context.fillText (id,10,20);                                   // write the text 'Hello'

  context.fillText ('Carbon Neutral Company',10,50);                                   // write the text 'Hello'

  return canvas;
}

module.exports = draw;