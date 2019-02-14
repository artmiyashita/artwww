<?php

/* macros.twig */
class __TwigTemplate_6bfed407cfcae0941948a4f80cb3b8392d9ef14ef9fe30dc9634542ec8d0e484 extends Twig_Template
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
        // line 18
        echo "
";
    }

    // line 1
    public function getlogoHtml($_metadata = null, $_alt = "")
    {
        $context = $this->env->mergeGlobals(array(
            "metadata" => $_metadata,
            "alt" => $_alt,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 2
            echo "    ";
            if ($this->getAttribute((isset($context["metadata"]) ? $context["metadata"] : null), "logo", array(), "array", true, true)) {
                // line 3
                echo "        ";
                if ($this->getAttribute((isset($context["metadata"]) ? $context["metadata"] : null), "logoWidth", array(), "array", true, true)) {
                    // line 4
                    echo "            ";
                    ob_start();
                    echo "width=\"";
                    echo twig_escape_filter($this->env, $this->getAttribute((isset($context["metadata"]) ? $context["metadata"] : $this->getContext($context, "metadata")), "logoWidth", array(), "array"), "html", null, true);
                    echo "\"";
                    $context["width"] = ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
                    // line 5
                    echo "        ";
                }
                // line 6
                echo "        ";
                if ($this->getAttribute((isset($context["metadata"]) ? $context["metadata"] : null), "logoHeight", array(), "array", true, true)) {
                    // line 7
                    echo "            ";
                    ob_start();
                    echo "height=\"";
                    echo twig_escape_filter($this->env, $this->getAttribute((isset($context["metadata"]) ? $context["metadata"] : $this->getContext($context, "metadata")), "logoHeight", array(), "array"), "html", null, true);
                    echo "\"";
                    $context["height"] = ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
                    // line 8
                    echo "        ";
                }
                // line 9
                echo "        ";
                if ($this->getAttribute((isset($context["metadata"]) ? $context["metadata"] : null), "logoWidth", array(), "array", true, true)) {
                    // line 10
                    echo "            ";
                    ob_start();
                    echo "width=\"";
                    echo twig_escape_filter($this->env, $this->getAttribute((isset($context["metadata"]) ? $context["metadata"] : $this->getContext($context, "metadata")), "logoWidth", array(), "array"), "html", null, true);
                    echo "\"";
                    $context["width"] = ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
                    // line 11
                    echo "        ";
                }
                // line 12
                echo "        ";
                if ((!twig_test_empty((isset($context["alt"]) ? $context["alt"] : $this->getContext($context, "alt"))))) {
                    // line 13
                    echo "            ";
                    ob_start();
                    echo "title='";
                    echo twig_escape_filter($this->env, (isset($context["alt"]) ? $context["alt"] : $this->getContext($context, "alt")), "html", null, true);
                    echo "' alt='";
                    echo twig_escape_filter($this->env, (isset($context["alt"]) ? $context["alt"] : $this->getContext($context, "alt")), "html", null, true);
                    echo "'";
                    $context["alt"] = ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
                    // line 14
                    echo "        ";
                }
                // line 15
                echo "        <img ";
                echo twig_escape_filter($this->env, (isset($context["alt"]) ? $context["alt"] : $this->getContext($context, "alt")), "html", null, true);
                echo " ";
                echo twig_escape_filter($this->env, ((array_key_exists("width", $context)) ? (_twig_default_filter((isset($context["width"]) ? $context["width"] : $this->getContext($context, "width")), "")) : ("")), "html", null, true);
                echo " ";
                echo twig_escape_filter($this->env, ((array_key_exists("height", $context)) ? (_twig_default_filter((isset($context["height"]) ? $context["height"] : $this->getContext($context, "height")), "")) : ("")), "html", null, true);
                echo " src='";
                echo twig_escape_filter($this->env, $this->getAttribute((isset($context["metadata"]) ? $context["metadata"] : $this->getContext($context, "metadata")), "logo", array(), "array"), "html", null, true);
                echo "' />
    ";
            }
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    // line 19
    public function getinlineHelp($_text = null)
    {
        $context = $this->env->mergeGlobals(array(
            "text" => $_text,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 20
            echo "    <div class=\"ui-inline-help\" >
        ";
            // line 21
            echo (isset($context["text"]) ? $context["text"] : $this->getContext($context, "text"));
            echo "
    </div>
";
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    public function getTemplateName()
    {
        return "macros.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  128 => 21,  125 => 20,  114 => 19,  93 => 15,  90 => 14,  75 => 11,  68 => 10,  65 => 9,  62 => 8,  55 => 7,  52 => 6,  49 => 5,  39 => 3,  36 => 2,  24 => 1,  19 => 18,  1020 => 424,  1012 => 418,  1009 => 417,  1004 => 415,  1000 => 414,  995 => 412,  987 => 407,  976 => 399,  971 => 397,  962 => 391,  951 => 383,  946 => 381,  939 => 376,  933 => 373,  928 => 371,  923 => 369,  912 => 364,  906 => 360,  904 => 359,  894 => 352,  889 => 350,  884 => 348,  873 => 342,  868 => 340,  863 => 338,  859 => 336,  852 => 331,  847 => 329,  841 => 328,  835 => 325,  830 => 323,  826 => 321,  819 => 316,  809 => 309,  802 => 307,  792 => 300,  788 => 298,  786 => 297,  777 => 290,  772 => 288,  768 => 286,  761 => 281,  756 => 278,  754 => 277,  745 => 270,  740 => 268,  731 => 262,  726 => 259,  724 => 258,  716 => 252,  711 => 250,  702 => 244,  698 => 242,  696 => 241,  693 => 240,  688 => 238,  683 => 236,  680 => 235,  677 => 234,  674 => 232,  670 => 230,  664 => 228,  662 => 227,  658 => 225,  647 => 220,  643 => 219,  636 => 215,  631 => 213,  627 => 212,  620 => 208,  615 => 206,  611 => 205,  607 => 203,  603 => 201,  597 => 199,  595 => 198,  590 => 196,  586 => 195,  579 => 191,  574 => 190,  570 => 188,  564 => 186,  562 => 185,  558 => 183,  551 => 181,  547 => 180,  542 => 179,  538 => 177,  531 => 175,  527 => 174,  524 => 172,  517 => 170,  513 => 169,  510 => 167,  503 => 165,  499 => 164,  496 => 162,  494 => 161,  490 => 159,  483 => 158,  479 => 157,  472 => 153,  466 => 150,  462 => 149,  458 => 148,  454 => 147,  446 => 146,  441 => 144,  437 => 143,  433 => 142,  429 => 141,  425 => 140,  420 => 137,  414 => 135,  412 => 134,  406 => 131,  402 => 130,  397 => 127,  391 => 125,  389 => 124,  386 => 123,  380 => 120,  377 => 119,  375 => 118,  370 => 116,  366 => 115,  363 => 114,  358 => 112,  355 => 111,  353 => 110,  349 => 109,  345 => 108,  341 => 107,  331 => 100,  323 => 99,  318 => 98,  316 => 97,  312 => 96,  307 => 95,  304 => 94,  302 => 93,  292 => 92,  287 => 90,  283 => 89,  279 => 88,  275 => 87,  271 => 86,  266 => 85,  263 => 84,  255 => 82,  252 => 81,  249 => 80,  247 => 79,  243 => 78,  239 => 77,  235 => 76,  231 => 75,  227 => 74,  223 => 73,  219 => 72,  215 => 71,  211 => 70,  207 => 68,  201 => 65,  197 => 64,  191 => 62,  185 => 61,  178 => 58,  176 => 57,  173 => 56,  171 => 55,  168 => 54,  161 => 52,  155 => 50,  153 => 49,  150 => 48,  148 => 47,  145 => 46,  140 => 44,  134 => 42,  132 => 41,  129 => 40,  124 => 38,  118 => 36,  116 => 35,  113 => 34,  107 => 32,  105 => 31,  102 => 30,  97 => 28,  91 => 26,  89 => 25,  86 => 24,  81 => 13,  78 => 12,  72 => 19,  66 => 17,  63 => 16,  61 => 15,  58 => 14,  56 => 13,  53 => 12,  48 => 10,  42 => 4,  40 => 7,  37 => 6,  34 => 5,  31 => 4,  28 => 3,);
    }
}
