function nam() {
	var a=/^[A-Za-z0-9]+$/
	var b=document.getElementById('name').value
	var fname_length=b.length
	
	var lamao=/^[A-Za-z0-9@_]+$/
	var lname=document.getElementById('pass1').value
	var lname_length=lname.length

	// var numb=/^[0-9]+$/
	// var c=document.getElementById('pa').value
	// var num_length=c.length

	if(b.match(a) )
	{
		// alert('bye')
		if(lname.match(lamao) && lname_length>=6 && lname_length<=10)
		{
			// alert("okay")
		}
		else{
			alert("enter minimum 8 latter")
			return false

		}
	}
	else{
		alert("enter username")
		return false

	}
}

function namei() {
	var a=/^[A-Za-z0-9]+$/
	var b=document.getElementById('use').value
	var fname_length=b.length
	
	var lamao=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
	// var lamao=/^([\w]*[\w\.]*(?!\.)@G*g*M*m*A*a*I*i*L*l.C*c*O*o*M*m)/
	// var ac=/^([\w]*[\w\.]*(?!\.)@R*r*K*k*U*u.A*a*C*c.I*i*N*n)/
	
	var lname=document.getElementById('gmail').value

	var numb=/^[0-9A-Za-z@_]+$/
	var c=document.getElementById('pass').value
	var num_length=c.length

	var d=document.getElementById('cpass').value
	var pass=c.length

	if(b.match(a) )
	{
		if(lname.match(lamao))
		{
			if(c.match(numb) && num_length >= 8)
			{
        if(d.match(c) && pass >= 8)
			{
			}
			else{
				alert("enter same as above passworld")
				return false
			}
			}
			else{
				alert("enter minimum 8 latter in passworld")
				return false

			}
		}
		else{
			alert("enter valid gmail id")
			return false

		}
	}
	else{
		alert("enter valid username")
		return false

	}
}


    function con1() {
      var fullName = document.getElementById('fullName').value;
      var email = document.getElementById('email').value;
      var message = document.getElementById('message').value;

      // Regular expression for a valid email format
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (fullName.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill in all fields');
        return false;
      }

      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return false;
      }

      // Additional custom validation can be added as needed

      return true;
    }