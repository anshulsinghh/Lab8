describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75')
    cy.get('#volume-slider').then(($el) => {
      expect($el).to.have.value(75)
    })
  });

  it('Volume changes when slider input changes', () => {
    cy.get('#volume-slider').invoke('val', '33').trigger('input')
    cy.get('#volume-number').then(($el) => {
      expect($el).to.have.value(33)
    })
  });

  it('Volume changes when slider input changes', () => {
    cy.get('#volume-slider').invoke('val', '33').trigger('input')
    cy.get('#horn-sound').then(($el) => {
      expect($el).to.have.prop('volume', 0.33)
    })
  });

  it('Image and sound sources change when radio changes', () => {
    cy.get('#radio-car-horn').click()
    
    cy.get('#sound-image').then(($el) => {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/images/car.svg')
    })

    cy.get('#horn-sound').then(($el) => {
      expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/audio/car-horn.mp3')
    })
  });

  it('Volume image changes when increasing volumes', () => {
    cy.get('#volume-number').clear().type('0')
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.prop('src', `http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-0.svg`)
    })

    cy.get('#volume-number').clear().type('10')
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.prop('src', `http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-1.svg`)
    })

    cy.get('#volume-number').clear().type('50')
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.prop('src', `http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-2.svg`)
    })

    cy.get('#volume-number').clear().type('80')
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.prop('src', `http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-3.svg`)
    })
  });

  it('Honk button disabled when textbox input is invalid', () => {
    cy.get('#volume-number').clear()
    cy.get('#honk-btn').then(($el) => {
      expect($el).to.have.attr('disabled')
    })

    cy.get('#volume-number').clear().type('a')
    cy.get('#honk-btn').then(($el) => {
      expect($el).to.have.attr('disabled')
    })
  });

  it('Error shown when number outside of range is typed', () => {
    cy.get('#volume-number').clear().type('1111')
    cy.get('input:invalid').then(($el) => {
      expect($el).to.have.value('1111')
    })
  });

});
