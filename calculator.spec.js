//test suit

describe('dCalculator.js',function(){
    
    it('should add number to the total', function(){
        
        const calc = new Calculator();
        calc.add(5);

        expect(calc.total).toBe(5);
    });

    it('should subtract number for the total',function(){
        const calc = new Calculator();

        calc.subtract(10);

        expect(calc.total).toBe(-10)
    });

    it('should multiply number with the total',function(){
        const calc = new Calculator();

        calc.add(2);
        calc.multiply(10);

        expect(calc.total).toBe(20)
    });

    it('should divide number with the total',function(){
        const calc = new Calculator();

        calc.add(10);
        calc.divide(2);

        expect(calc.total).toBe(5);
    });

    it('should make a calculation ', function(){
        const calc = new Calculator();

        calc.add(10)
        calc.subtract(5)
        calc.multiply(4)
        calc.divide(2)
        calc.add(2,2)

        expect(calc.total).toBe(12,2)

    });


});


describe('dCalculator.js',function(){



    it('should verify if the rersult is equal ', function(){
        const calc = new Calculator();

        calc.add(10)
        calc.divide(2)


        expect(calc.total).toEqual(5)

    });


    it('should verify if the result is close ', function(){
        const calc = new Calculator();

        calc.add(5)
        calc.multiply(2,5)


        expect(calc.total).toBeCloseTo(10)

    });

    it('should verify if the result is less ', function(){
        const calc = new Calculator();

        calc.add(6)
        calc.subtract(2)


        expect(calc.total).toBeLessThan(5)

    });

});