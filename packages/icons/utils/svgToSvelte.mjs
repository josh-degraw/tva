import { join, relative, resolve, sep } from 'node:path'
import fs from 'node:fs'
import iterateSvgs from './iterateSvgs.mjs'

const srcPath = join('npm', 'svg')
const buildPath = join('npm', 'generated', 'svelte')
const indexFile = join(buildPath, 'index.ts')

function getOutputDir(pathName) {
  return pathName.replace(srcPath, buildPath)
}

function addIndexReference(outputPath, outputFile, varName) {
  const importUrl = relative(buildPath, outputPath)
    .split(sep)
    .concat([outputFile])
    .join('/')

  fs.appendFileSync(
    indexFile,
    `export { default as ${varName} } from './${importUrl}'\n`
  )
}

function svgToSvelte(pathName, varName, svgContent) {
  const outputPath = getOutputDir(pathName)
  const outputFile = `${varName}.svelte`
  const svelteIconContent = svgContent.replace(
    /<svg (.*?)>/gm,
    `<svg $1 {...$$$$restProps}>`
  )

  fs.writeFileSync(resolve(outputPath, outputFile), svelteIconContent)

  addIndexReference(outputPath, outputFile, varName)
}

function removeIndexFile() {
  if (fs.existsSync(indexFile)) {
    fs.rmSync(indexFile)
  }
}

function createOutputDir(pathName) {
  const outputPath = getOutputDir(pathName)

  try {
    fs.mkdirSync(resolve(outputPath), { recursive: true })
  } catch (err) {
    console.log(`Failed to create ${outputPath}`)
  }
}

console.log('Generating Svelte icons...')
removeIndexFile()
iterateSvgs(srcPath, svgToSvelte, createOutputDir)
console.log('done!')
