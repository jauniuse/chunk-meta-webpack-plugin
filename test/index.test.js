import compiler from './compiler';

test('injects chunk name and hash', (done) => {
    compiler.run((__, stats) => {
        const chunk = stats.compilation.chunks[0]
        const chunkFileName = chunk.files[0];
        const chunkHash = chunk.renderedHash;
        const code = stats.compilation.assets[chunkFileName].source();

        expect(code).toContain(`["${chunkHash}"]`)
        done();
    });
});
