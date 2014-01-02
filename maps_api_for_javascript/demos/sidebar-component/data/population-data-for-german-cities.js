 
var popData = [{'latitude':52.15085,'longitude':9.95154,'value':102794,'name':'Hildesheim'},
{'latitude':51.761,'longitude':14.33128,'value':102091,'name':'Cottbus'},
{'latitude':50.92696,'longitude':11.58634,'value':105129,'name':'Jena'},
{'latitude':50.87242,'longitude':8.0229,'value':103424,'name':'Siegen'},
{'latitude':51.17929,'longitude':7.19303,'value':110563,'name':'Remscheid'},
{'latitude':49.59795,'longitude':11.00258,'value':105629,'name':'Erlangen'},
{'latitude':52.15329,'longitude':10.33318,'value':102394,'name':'Salzgitter'},
{'latitude':48.49159,'longitude':9.21487,'value':112484,'name':'Reutlingen'},
{'latitude':51.4526,'longitude':6.62524,'value':105506,'name':'Moers'},
{'latitude':50.3608,'longitude':7.59277,'value':106417,'name':'Koblenz'},
{'latitude':53.54433,'longitude':8.58192,'value':113366,'name':'Bremerhaven'},
{'latitude':50.99168,'longitude':7.13366,'value':105723,'name':'Bergisch Gladbach'},
{'latitude':51.5247,'longitude':6.92519,'value':116771,'name':'Bottrop'},
{'latitude':51.61351,'longitude':7.1933,'value':118365,'name':'Recklinghausen'},
{'latitude':48.89013,'longitude':8.70025,'value':119781,'name':'Pforzheim'},
{'latitude':49.75722,'longitude':6.63648,'value':105260,'name':'Treves'},
{'latitude':48.76236,'longitude':11.42523,'value':125088,'name':'Ingolstadt'},
{'latitude':49.79299,'longitude':9.93651,'value':133799,'name':'W&uuml;rzburg'},
{'latitude':49.01492,'longitude':12.10173,'value':135520,'name':'Regensburg'},
{'latitude':52.42126,'longitude':10.78741,'value':121451,'name':'Wolfsburg'},
{'latitude':51.19629,'longitude':6.6941,'value':151388,'name':'Neuss'},
{'latitude':50.10541,'longitude':8.76582,'value':120435,'name':'Offenbach am Main'},
{'latitude':51.5313,'longitude':9.93802,'value':121060,'name':'G&ouml;ttingen'},
{'latitude':49.41349,'longitude':8.70819,'value':147312,'name':'Heidelberg'},
{'latitude':51.71814,'longitude':8.75204,'value':146283,'name':'Paderborn'},
{'latitude':49.14314,'longitude':9.21929,'value':122879,'name':'Heilbronn'},
{'latitude':48.39714,'longitude':9.98787,'value':122801,'name':'Ulm'},
{'latitude':49.87269,'longitude':8.65016,'value':144402,'name':'Darmstadt'},
{'latitude':49.48095,'longitude':8.44735,'value':164177,'name':'Ludwigshafen am Rhein'},
{'latitude':51.03319,'longitude':6.98174,'value':160772,'name':'Leverkusen'},
{'latitude':52.27253,'longitude':8.04778,'value':164119,'name':'Osnabr&uuml;ck'},
{'latitude':49.23149,'longitude':6.99833,'value':175741,'name':'Saarbr&uuml;cken'},
{'latitude':51.54031,'longitude':7.21987,'value':164762,'name':'Herne'},
{'latitude':51.17216,'longitude':7.08675,'value':159927,'name':'Solingen'},
{'latitude':52.39935,'longitude':13.04793,'value':156906,'name':'Potsdam'},
{'latitude':51.6801,'longitude':7.81752,'value':181783,'name':'Hamm'},
{'latitude':51.31176,'longitude':9.49119,'value':195530,'name':'Kassel'},
{'latitude':50.0006,'longitude':8.2723,'value':199237,'name':'Mainz'},
{'latitude':51.3599,'longitude':7.47125,'value':188529,'name':'Hagen'},
{'latitude':50.97768,'longitude':11.02307,'value':204994,'name':'Erfurt'},
{'latitude':54.07898,'longitude':12.13246,'value':202735,'name':'Rostock'},
{'latitude':53.86972,'longitude':10.686389,'value':210232,'name':'L&uuml;beck'},
{'latitude':53.1387,'longitude':8.21144,'value':162173,'name':'Oldenburg'},
{'latitude':51.3339,'longitude':6.5623,'value':235076,'name':'Krefeld'},
{'latitude':51.46945,'longitude':6.85507,'value':212945,'name':'Oberhausen'},
{'latitude':50.83636,'longitude':12.92146,'value':243248,'name':'Chemnitz'},
{'latitude':52.26543,'longitude':10.52736,'value':248867,'name':'Brunswick'},
{'latitude':54.32324,'longitude':10.1322,'value':239526,'name':'Kiel'},
{'latitude':51.51133,'longitude':7.09253,'value':257981,'name':'Gelsenkirchen'},
{'latitude':50.77823,'longitude':6.08864,'value':258664,'name':'Aachen'},
{'latitude':52.13186,'longitude':11.62778,'value':231549,'name':'Magdeburg'},
{'latitude':51.1955,'longitude':6.44268,'value':257993,'name':'M&ouml;nchengladbach'},
{'latitude':52.02299,'longitude':8.53326,'value':323270,'name':'Bielefeld'},
{'latitude':50.08459,'longitude':8.2423,'value':275976,'name':'Wiesbaden'},
{'latitude':47.99854,'longitude':7.84966,'value':224191,'name':'Freiburg'},
{'latitude':51.48129,'longitude':11.97546,'value':232963,'name':'Halle (Saale)'},
{'latitude':48.37033,'longitude':10.89789,'value':264708,'name':'Augsburg'},
{'latitude':49.01076,'longitude':8.40869,'value':294761,'name':'Karlsruhe'},
{'latitude':49.48651,'longitude':8.46678,'value':313174,'name':'Mannheim'},
{'latitude':49.45434,'longitude':11.07349,'value':505664,'name':'Nuremberg'},
{'latitude':51.3452,'longitude':12.38594,'value':522883,'name':'Leipzig'},
{'latitude':53.07509,'longitude':8.8047,'value':547340,'name':'Bremen'},
{'latitude':50.7323,'longitude':7.10169,'value':324899,'name':'Bonn'},
{'latitude':51.45181,'longitude':7.0106,'value':574635,'name':'Essen'},
{'latitude':51.48644,'longitude':7.21079,'value':374737,'name':'Bochum'},
{'latitude':51.21563,'longitude':6.77604,'value':588735,'name':'D&uuml;sseldorf'},
{'latitude':51.51661,'longitude':7.45829,'value':580444,'name':'Dortmund'},
{'latitude':51.43143,'longitude':6.76393,'value':489599,'name':'Duisburg'},
{'latitude':51.05363,'longitude':13.74081,'value':523058,'name':'Dresden'},
{'latitude':51.27155,'longitude':7.19656,'value':349721,'name':'Wuppertal'},
{'latitude':48.13641,'longitude':11.57753,'value':1353186,'name':'Munich'},
{'latitude':48.76767,'longitude':9.17192,'value':606588,'name':'Stuttgart'},
{'latitude':52.37227,'longitude':9.73815,'value':522686,'name':'Hanover'},
{'latitude':52.51607,'longitude':13.37698,'value':3460725,'name':'Berlin'},
{'latitude':53.55334,'longitude':9.99245,'value':1786448,'name':'Hamburg'},
{'latitude':50.11208,'longitude':8.68341,'value':679664,'name':'Frankfurt am Main'}]