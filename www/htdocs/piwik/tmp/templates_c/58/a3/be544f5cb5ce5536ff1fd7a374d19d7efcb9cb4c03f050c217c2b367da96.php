<?php

/* @VisitsSummary/_sparklines.twig */
class __TwigTemplate_58a3be544f5cb5ce5536ff1fd7a374d19d7efcb9cb4c03f050c217c2b367da96 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        echo "<div id='leftcolumn'>
    <div class=\"sparkline\">
        ";
        // line 3
        echo call_user_func_array($this->env->getFunction('sparkline')->getCallable(), array((isset($context["urlSparklineNbVisits"]) ? $context["urlSparklineNbVisits"] : $this->getContext($context, "urlSparklineNbVisits"))));
        echo "
        ";
        // line 4
        echo call_user_func_array($this->env->getFilter('translate')->getCallable(), array("General_NVisits", (("<strong>" . (isset($context["nbVisits"]) ? $context["nbVisits"] : $this->getContext($context, "nbVisits"))) . "</strong>")));
        if ((isset($context["displayUniqueVisitors"]) ? $context["displayUniqueVisitors"] : $this->getContext($context, "displayUniqueVisitors"))) {
            echo ",
            ";
            // line 5
            echo call_user_func_array($this->env->getFilter('translate')->getCallable(), array("VisitsSummary_NbUniqueVisitors", (("<strong>" . (isset($context["nbUniqVisitors"]) ? $context["nbUniqVisitors"] : $this->getContext($context, "nbUniqVisitors"))) . "</strong>")));
        }
        // line 6
        echo "    </div>
    <div class=\"sparkline\">
        ";
        // line 8
        echo call_user_func_array($this->env->getFunction('sparkline')->getCallable(), array((isset($context["urlSparklineAvgVisitDuration"]) ? $context["urlSparklineAvgVisitDuration"] : $this->getContext($context, "urlSparklineAvgVisitDuration"))));
        echo "
        ";
        // line 9
        $context["averageVisitDuration"] = call_user_func_array($this->env->getFilter('sumtime')->getCallable(), array((isset($context["averageVisitDuration"]) ? $context["averageVisitDuration"] : $this->getContext($context, "averageVisitDuration"))));
        // line 10
        echo "        ";
        echo call_user_func_array($this->env->getFilter('translate')->getCallable(), array("VisitsSummary_AverageVisitDuration", (("<strong>" . (isset($context["averageVisitDuration"]) ? $context["averageVisitDuration"] : $this->getContext($context, "averageVisitDuration"))) . "</strong>")));
        echo "
    </div>
    <div class=\"sparkline\">
        ";
        // line 13
        echo call_user_func_array($this->env->getFunction('sparkline')->getCallable(), array((isset($context["urlSparklineBounceRate"]) ? $context["urlSparklineBounceRate"] : $this->getContext($context, "urlSparklineBounceRate"))));
        echo "
        ";
        // line 14
        echo call_user_func_array($this->env->getFilter('translate')->getCallable(), array("VisitsSummary_NbVisitsBounced", (("<strong>" . (isset($context["bounceRate"]) ? $context["bounceRate"] : $this->getContext($context, "bounceRate"))) . "%</strong>")));
        echo "
    </div>
    <div class=\"sparkline\">
        ";
        // line 17
        echo call_user_func_array($this->env->getFunction('sparkline')->getCallable(), array((isset($context["urlSparklineActionsPerVisit"]) ? $context["urlSparklineActionsPerVisit"] : $this->getContext($context, "urlSparklineActionsPerVisit"))));
        echo "
        ";
        // line 18
        echo call_user_func_array($this->env->getFilter('translate')->getCallable(), array("VisitsSummary_NbActionsPerVisit", (("<strong>" . (isset($context["nbActionsPerVisit"]) ? $context["nbActionsPerVisit"] : $this->getContext($context, "nbActionsPerVisit"))) . "</strong>")));
        echo "
    </div>
\t<div class=\"sparkline\">
        ";
        // line 21
        echo call_user_func_array($this->env->getFunction('sparkline')->getCallable(), array((isset($context["urlSparklineAvgGenerationTime"]) ? $context["urlSparklineAvgGenerationTime"] : $this->getContext($context, "urlSparklineAvgGenerationTime"))));
        echo "
\t\t";
        // line 22
        $context["averageGenerationTime"] = call_user_func_array($this->env->getFilter('sumtime')->getCallable(), array((isset($context["averageGenerationTime"]) ? $context["averageGenerationTime"] : $this->getContext($context, "averageGenerationTime"))));
        // line 23
        echo "\t\t";
        echo call_user_func_array($this->env->getFilter('translate')->getCallable(), array("VisitsSummary_AverageGenerationTime", (("<strong>" . (isset($context["averageGenerationTime"]) ? $context["averageGenerationTime"] : $this->getContext($context, "averageGenerationTime"))) . "</strong>")));
        echo "
\t</div>
</div>

<div id='rightcolumn'>
    ";
        // line 28
        if ((isset($context["showOnlyActions"]) ? $context["showOnlyActions"] : $this->getContext($context, "showOnlyActions"))) {
            // line 29
            echo "        <div class=\"sparkline\">
            ";
            // line 30
            echo call_user_func_array($this->env->getFunction('sparkline')->getCallable(), array((isset($context["urlSparklineNbActions"]) ? $context["urlSparklineNbActions"] : $this->getContext($context, "urlSparklineNbActions"))));
            echo "
            ";
            // line 31
            echo call_user_func_array($this->env->getFilter('translate')->getCallable(), array("VisitsSummary_NbActionsDescription", (("<strong>" . (isset($context["nbActions"]) ? $context["nbActions"] : $this->getContext($context, "nbActions"))) . "</strong>")));
            echo "
        </div>
    ";
        } else {
            // line 34
            echo "        <div class=\"sparkline\">
            ";
            // line 35
            echo call_user_func_array($this->env->getFunction('sparkline')->getCallable(), array((isset($context["urlSparklineNbPageviews"]) ? $context["urlSparklineNbPageviews"] : $this->getContext($context, "urlSparklineNbPageviews"))));
            echo "
            ";
            // line 36
            echo trim(call_user_func_array($this->env->getFilter('translate')->getCallable(), array("VisitsSummary_NbPageviewsDescription", (("<strong>" . (isset($context["nbPageviews"]) ? $context["nbPageviews"] : $this->getContext($context, "nbPageviews"))) . "</strong>"))));
            echo ",
            ";
            // line 37
            echo call_user_func_array($this->env->getFilter('translate')->getCallable(), array("VisitsSummary_NbUniquePageviewsDescription", (("<strong>" . (isset($context["nbUniquePageviews"]) ? $context["nbUniquePageviews"] : $this->getContext($context, "nbUniquePageviews"))) . "</strong>")));
            echo "
        </div>
        ";
            // line 39
            if ((isset($context["displaySiteSearch"]) ? $context["displaySiteSearch"] : $this->getContext($context, "displaySiteSearch"))) {
                // line 40
                echo "            <div class=\"sparkline\">
                ";
                // line 41
                echo call_user_func_array($this->env->getFunction('sparkline')->getCallable(), array((isset($context["urlSparklineNbSearches"]) ? $context["urlSparklineNbSearches"] : $this->getContext($context, "urlSparklineNbSearches"))));
                echo "
                ";
                // line 42
                echo trim(call_user_func_array($this->env->getFilter('translate')->getCallable(), array("VisitsSummary_NbSearchesDescription", (("<strong>" . (isset($context["nbSearches"]) ? $context["nbSearches"] : $this->getContext($context, "nbSearches"))) . "</strong>"))));
                echo ",
                ";
                // line 43
                echo call_user_func_array($this->env->getFilter('translate')->getCallable(), array("VisitsSummary_NbKeywordsDescription", (("<strong>" . (isset($context["nbKeywords"]) ? $context["nbKeywords"] : $this->getContext($context, "nbKeywords"))) . "</strong>")));
                echo "
            </div>
        ";
            }
            // line 46
            echo "        <div class=\"sparkline\">
                ";
            // line 47
            echo call_user_func_array($this->env->getFunction('sparkline')->getCallable(), array((isset($context["urlSparklineNbDownloads"]) ? $context["urlSparklineNbDownloads"] : $this->getContext($context, "urlSparklineNbDownloads"))));
            echo "
                ";
            // line 48
            echo trim(call_user_func_array($this->env->getFilter('translate')->getCallable(), array("VisitsSummary_NbDownloadsDescription", (("<strong>" . (isset($context["nbDownloads"]) ? $context["nbDownloads"] : $this->getContext($context, "nbDownloads"))) . "</strong>"))));
            echo ",
                ";
            // line 49
            echo call_user_func_array($this->env->getFilter('translate')->getCallable(), array("VisitsSummary_NbUniqueDownloadsDescription", (("<strong>" . (isset($context["nbUniqueDownloads"]) ? $context["nbUniqueDownloads"] : $this->getContext($context, "nbUniqueDownloads"))) . "</strong>")));
            echo "
        </div>
        <div class=\"sparkline\">
                ";
            // line 52
            echo call_user_func_array($this->env->getFunction('sparkline')->getCallable(), array((isset($context["urlSparklineNbOutlinks"]) ? $context["urlSparklineNbOutlinks"] : $this->getContext($context, "urlSparklineNbOutlinks"))));
            echo "
                ";
            // line 53
            echo trim(call_user_func_array($this->env->getFilter('translate')->getCallable(), array("VisitsSummary_NbOutlinksDescription", (("<strong>" . (isset($context["nbOutlinks"]) ? $context["nbOutlinks"] : $this->getContext($context, "nbOutlinks"))) . "</strong>"))));
            echo ",
                ";
            // line 54
            echo call_user_func_array($this->env->getFilter('translate')->getCallable(), array("VisitsSummary_NbUniqueOutlinksDescription", (("<strong>" . (isset($context["nbUniqueOutlinks"]) ? $context["nbUniqueOutlinks"] : $this->getContext($context, "nbUniqueOutlinks"))) . "</strong>")));
            echo "
        </div>
    ";
        }
        // line 57
        echo "    <div class=\"sparkline\">
            ";
        // line 58
        echo call_user_func_array($this->env->getFunction('sparkline')->getCallable(), array((isset($context["urlSparklineMaxActions"]) ? $context["urlSparklineMaxActions"] : $this->getContext($context, "urlSparklineMaxActions"))));
        echo "
            ";
        // line 59
        echo call_user_func_array($this->env->getFilter('translate')->getCallable(), array("VisitsSummary_MaxNbActions", (("<strong>" . (isset($context["maxActions"]) ? $context["maxActions"] : $this->getContext($context, "maxActions"))) . "</strong>")));
        echo "
    </div>
</div>
<div style=\"clear:both;\"></div>

";
        // line 64
        $this->env->loadTemplate("_sparklineFooter.twig")->display($context);
        // line 65
        echo "
";
    }

    public function getTemplateName()
    {
        return "@VisitsSummary/_sparklines.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  185 => 65,  183 => 64,  175 => 59,  171 => 58,  168 => 57,  162 => 54,  158 => 53,  154 => 52,  148 => 49,  144 => 48,  140 => 47,  137 => 46,  131 => 43,  127 => 42,  123 => 41,  120 => 40,  118 => 39,  113 => 37,  109 => 36,  105 => 35,  102 => 34,  96 => 31,  92 => 30,  89 => 29,  87 => 28,  78 => 23,  76 => 22,  72 => 21,  66 => 18,  62 => 17,  56 => 14,  52 => 13,  45 => 10,  43 => 9,  39 => 8,  35 => 6,  32 => 5,  27 => 4,  23 => 3,  34 => 7,  30 => 6,  25 => 4,  19 => 1,);
    }
}
