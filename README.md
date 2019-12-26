# Javascript-Debugg-Tool
Creates a small box where chosen variables values is shown. 

The debhugg box gives you an easy way to sneakpeak at your variables when running a script.
Put the code at the end of your javascript file and use the variables v1 to v6 to diplay the values.

In the following example we want to know the value of the variable "Title" is

	if (ChannelName1 == "") {
		Title = ActiveURL1;
	} else {
		Title = ChannelName1;
	}
	v1 = Title;
