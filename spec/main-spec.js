// const main = require('../main/main');

// describe('main()', () => {

// });

const main = require('../main/main');
describe('main()', () => {
    it("输入‘1234’",function() {
        let numExample = '1234' ;
        exportText = `4A0B` ;
        
        result = main.compare(numExample,'1234');

        expect(result).toEqual(exportText);
    })

    it("输入‘4321’",function() {
        let numExample = '4321' ;
        exportText = `0A4B` ;
        
        result = main.compare(numExample,'1234');

        expect(result).toEqual(exportText);
    })
});