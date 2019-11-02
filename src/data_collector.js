var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() 
{
    if (this.readyState == 4 && this.status == 200) 
    {
        var data = JSON.parse(this.responseText);
        const mj_projects = data["major_projects"];
        const mi_projects = data["mini_projects"];

        display_major_projects(mj_projects);
        setTimeout( () => {
            document.getElementsByClassName("loading")[0].style.display = "none";
            document.getElementsByClassName("grid_section")[0].style.display = "grid";     
        }
        , 1500);
        // display_minor_projects(mi_projects);
    }
};
xhttp.open("GET", "https://dhyeythumar.github.io/impression/project_data/projects.json", true);
xhttp.send();

function display_major_projects(m_projects)
{
    for(var i=0; i<m_projects.length; i++)
    {
        var tags = m_projects[i]["date"] + " &bull; ";
        for(var j=0; j<m_projects[i]["tags"].length; j++)
        {
            if(j == m_projects[i]["tags"].length-1)
            {
                tags += m_projects[i]["tags"][j];
            }
            else
            {
                tags += m_projects[i]["tags"][j] + " &bull; ";
            }
        }
        let res = ''
        if(m_projects[i]["link"] === "#")
        {
            res = '<a onclick="pop_up()">'
        }
        else
        {
            res = '<a href="' + m_projects[i]["link"] + '">'
        }
        let data = '<div class="grid_content">' +
                        '<div class="grid_link">' + 
                            res +
                                '<img class="proj_image" src="' + m_projects[i]["image_link"] + '">' +
                                '<div class="proj_name">' + m_projects[i]["proj_name"] + '</div>' +
                                '<div class="date_tags">' + tags + '</div>' +
                            '</a>' +
                        '</div>' +
                        '<div class="content">' + m_projects[i]["content"] + '</div>' +
                    '</div>'; 
        $(data).appendTo(".grid_section");
    }
}
