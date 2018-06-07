function fivaa(x)
{
    var output = "";
    var z;

    for (i = x; i > 0; i--)
    {
        for(j=0; j < 2; j++)
        {
            z = (i-1);
            output += z.toString();
        }

        for(k=0; k < i; k++)
        {
            z = (i+1);
            output += z.toString();
        }

        output += "\n";
    }

    return output;
}

console.log(fivaa(5));
