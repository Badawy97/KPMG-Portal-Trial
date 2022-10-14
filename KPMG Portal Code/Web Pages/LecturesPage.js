  $(function() {
    localStorage.clear()
  {% if user %}
    localStorage.setItem('userId', "{{user.id}}");
     {% if user.roles contains 'Student' %}
    localStorage.setItem('addBtn', 'true'); 
    {% endif %}
   {% endif %}
  });