class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-\s'-]/g, '');
  }

  static titleize(string){
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let newWords = []
    let words = string.split(' ')
    newWords.push(this.capitalize(words.shift(0)))
    for (let word of words) {
       if (exceptions.includes(word)) {
          newWords.push(word)
       } else {
          newWords.push(this.capitalize(word))
       }   
    }
    return newWords.join(' ')
  }
}