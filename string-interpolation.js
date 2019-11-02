let b = '<p>valor 100</p>';

// funciona, mas não é a melhor forma
var a = `
<p>Textokdflçfkçlksdçfkçlsdfkçldsfkçdkfçlds</p>
<p>Textokdflçfkçlksdçfkçlsdfkçldsfkçdkfçlds</p>
<p>Textokdflçfkçlksdçfkçlsdfkçldsfkçdkfçlds</p>
`+b;

// melhor, interpolação
var a = `
<p>Textokdflçfkçlksdçfkçlsdfkçldsfkçdkfçlds</p>
<p>Textokdflçfkçlksdçfkçlsdfkçldsfkçdkfçlds</p>
${b}
<p>Textokdflçfkçlksdçfkçlsdfkçldsfkçdkfçlds</p>
`;