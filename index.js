const rulesFiles = [
  './rules/react'
]

module.exports = {
  extends: rulesFiles.map(require.resolve)
}
