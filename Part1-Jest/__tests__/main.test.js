const formatVolumeIconPath = require('../assets/scripts/main')


describe('formatVolumeIconPath tests', () => {
    test('tests volume level 3', () => {
        let iconLevel = "3"
        expect(formatVolumeIconPath(80)).toBe(`./assets/media/icons/volume-level-${iconLevel}.svg`);
    });

    test('tests volume level 2', () => {
        let iconLevel = "2"
        expect(formatVolumeIconPath(60)).toBe(`./assets/media/icons/volume-level-${iconLevel}.svg`);
    });

    test('tests volume level 1', () => {
        let iconLevel = "1"
        expect(formatVolumeIconPath(10)).toBe(`./assets/media/icons/volume-level-${iconLevel}.svg`);
    });

    test('tests volume level 0', () => {
        let iconLevel = "0"
        expect(formatVolumeIconPath(0)).toBe(`./assets/media/icons/volume-level-${iconLevel}.svg`);
    });
});