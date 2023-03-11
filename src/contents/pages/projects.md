---
title: Projects
layout: base
permalink: /projects/
eleventyNavigation:
  key: Projects
  order: 2
---

Here are some projects that I have done 

{% for project in collections.projects %}
- [{{ project.data.title }}]({{ project.url }})
{% endfor %}
