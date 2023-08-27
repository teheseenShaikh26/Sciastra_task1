let imgbx = document.querySelectorAll('.imgbx');
        let infobox = document.querySelectorAll('.infobox');

        for(let i = 0; i < imgbx.length; i++)
        {
            imgbx[i].addEventListener('mouseover', function(){
                for(let i = 0; i < infobox.length; i++)
                {
                    infobox[i].className = 'infobox';
                }
                document.getElementById(this.dataset.id).className = 'infobox active';

                for(let i = 0; i < imgbx.length; i++)
                {
                    imgbx[i].className = 'imgbx';
                }
                this.className = 'imgbx active';
            }
            )
        }