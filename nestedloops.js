let i, j
for (i = 1; i < 5; i++) {
    for (j = 0; j < i; j++) {
        process.stdout.write(j + '')
    }
    console.log('')
}


//  process.stdout.write() is a ,function in JavaScript that writes a string to the standard output stream.
// It is similar to console.log(), but it does not automatically
//  append a newline character at the end of the string. This can be useful
//  if you want to print multiple pieces of output on the same line.