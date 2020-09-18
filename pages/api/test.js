// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  console.log('test')
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }
      return resolve(result)
    })
  })
}

function middleware2(handler) {
  console.log('middleware 2')
}

async function handler(req, res) {
  // Run the middleware
  // await runMiddleware(req, res, null)

  // Rest of the API logic
  res.json({ message: 'Hello Everyone!' })
}

export default middleware2(handler)