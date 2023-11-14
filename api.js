const token ="IGQWRNaXFzSkl6cWtJWm5kcTVxRXltSGRvcUZADeHpZAMmhWTzRTWlFhUC1XTzliT2xsY0pONWZAyRmY1YzZA3MzFvNWtrSHE5ZAkNFR1A1ZAUNtUS1ubnJIdktyNGhWc0htMnlZAQlZAfTnNRSGU0dXNvRFNJVDZAkVkpxaFEZD"

fetch('https://graph.instagram.com/me/media?fields=id,media_url,username,timestamp&access_token=IGQWRNaXFzSkl6cWtJWm5kcTVxRXltSGRvcUZADeHpZAMmhWTzRTWlFhUC1XTzliT2xsY0pONWZAyRmY1YzZA3MzFvNWtrSHE5ZAkNFR1A1ZAUNtUS1ubnJIdktyNGhWc0htMnlZAQlZAfTnNRSGU0dXNvRFNJVDZAkVkpxaFEZD')
    .then(response => response.json())
    .then(data => {
      // faça algo com os dados retornados

      console.log(data)
    })
    .catch(error => {
      // trate erros de requisição
    });